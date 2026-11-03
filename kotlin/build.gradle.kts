plugins {
    id("com.android.library") version "8.7.3"
    id("org.jetbrains.kotlin.android") version "2.0.21"
    `maven-publish`
}

group = "com.github.aaronshaf"
version = System.getenv("VERSION") ?: "0.5.0-android.1"

android {
    namespace = "com.github.aaronshaf.greekphonology"
    compileSdk = 35

    defaultConfig {
        minSdk = 26
        consumerProguardFiles("consumer-rules.pro")
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }

    publishing {
        singleVariant("release") {
            withSourcesJar()
        }
    }

    testOptions {
        unitTests.isIncludeAndroidResources = true
    }

    lint {
        abortOnError = false
    }
}

dependencies {
    implementation("com.dylibso.chicory:runtime:1.7.5")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.7.3")
    testImplementation("junit:junit:4.13.2")
}

tasks.register<Jar>("jvmJar") {
    group = "build"
    description = "Plain JVM jar of the library classes and the bundled wasm."
    archiveBaseName.set("greek-phonology-jvm")
    dependsOn("compileReleaseKotlin", "compileReleaseJavaWithJavac")
    from(layout.buildDirectory.dir("tmp/kotlin-classes/release"))
    from(layout.buildDirectory.dir("intermediates/javac/release/compileReleaseJavaWithJavac/classes"))
    from(layout.projectDirectory.dir("src/main/resources"))
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
}

afterEvaluate {
    publishing {
        publications {
            register<MavenPublication>("release") {
                from(components["release"])
                groupId = "com.github.aaronshaf"
                artifactId = "greek-phonology"
                version = project.version.toString()
            }
            register<MavenPublication>("jvm") {
                groupId = "com.github.aaronshaf"
                artifactId = "greek-phonology-jvm"
                version = project.version.toString()
                artifact(tasks.named("jvmJar"))
                pom {
                    withXml {
                        val deps = asNode().appendNode("dependencies")
                        fun add(group: String, artifact: String, ver: String) {
                            val node = deps.appendNode("dependency")
                            node.appendNode("groupId", group)
                            node.appendNode("artifactId", artifact)
                            node.appendNode("version", ver)
                        }
                        add("com.dylibso.chicory", "runtime", "1.7.5")
                        add("org.jetbrains.kotlinx", "kotlinx-serialization-json", "1.7.3")
                        add("org.jetbrains.kotlin", "kotlin-stdlib", "2.0.21")
                    }
                }
            }
        }
    }
}
