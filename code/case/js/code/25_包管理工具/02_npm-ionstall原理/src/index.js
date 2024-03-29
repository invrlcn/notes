/***
 * npm install会检测是有package-lock.json文件
 *  没有lock文件
    分析依赖关系，这是因为我们可能包会依赖其他的包，并且多个包之间会产生相同依赖的情况；
    从registry仓库中下载压缩包（如果我们设置了镜像，那么会从镜像服务器下载压缩包）；
    获取到压缩包后会对压缩包进行缓存（从npm5开始有的）；
    将压缩包解压到项目的node_modules文件夹中
 * 有lock文件
    检测lock中包的版本是否和package.json中一致（会按照semver版本规范检测）；
    不一致，那么会重新构建依赖关系，直接会走顶层的流程；
    一致的情况下，会去优先查找缓存
    没有找到，会从registry仓库下载，直接走顶层流程；
    查找到，会获取缓存中的压缩文件，并且将压缩文件解压到node_modules文件夹中
 * 
*/