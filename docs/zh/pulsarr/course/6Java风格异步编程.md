Java风格异步编程
=

PulsarR 丰富的 API 使得我们的绝大多数编程场景下，都能够使用一行代码解决“加载-解析-提取”。本文介绍如何使用 Java 风格的异步编程，来解决批量的网页采集问题。

```kotlin
object JvmAsync {
    val session = createSession()

    fun loadAll() {
        fromResource("seeds10.txt").parallelStream()
            .map(session::open).map(session::parse).map(FeaturedDocument::guessTitle)
            .forEach { println(it) }
    }

    fun loadAllAsync2() {
        val futures = fromResource("seeds10.txt")
            .asSequence()
            .map { "$it -i 1d" }
            .map { session.loadAsync(it) }
            .map { it.thenApply { session.parse(it) } }
            .map { it.thenApply { it.guessTitle() } }
            .map { it.thenAccept { println(it) } }
            .toList()
            .toTypedArray()
        CompletableFuture.allOf(*futures).join()
    }

    fun loadAllAsync3() {
        val futures = session.loadAllAsync(fromResource("seeds10.txt"))
            .map { it.thenApply { session.parse(it) } }
            .map { it.thenApply { it.guessTitle() } }
            .map { it.thenAccept { println(it) } }
            .toTypedArray()
        CompletableFuture.allOf(*futures).join()
    }

    fun loadAllAsync4() {
        val futures = session.loadAllAsync(fromResource("seeds10.txt"))
            .map { it.thenApply { session.parse(it) }.thenApply { it.guessTitle() }.thenAccept { println(it) } }
            .toTypedArray()
        CompletableFuture.allOf(*futures).join()
    }
}
```

在线代码：[kotlin](https://github.com/platonai/pulsarr/blob/1.10.x/pulsar-app/pulsar-examples/src/main/kotlin/ai/platon/pulsar/examples/_3_JvmAsync.kt)，[国内镜像](https://gitee.com/platonai_galaxyeye/pulsarr/blob/1.10.x/pulsar-app/pulsar-examples/src/main/kotlin/ai/platon/pulsar/examples/_3_JvmAsync.kt)。

------

[上一章](5URL.md) [目录](1目录.md) [下一章](7Kotlin风格异步编程.md)
