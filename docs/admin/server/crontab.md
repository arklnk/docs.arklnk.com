# 定时任务

## 定时任务调度

```
Crontab:
│  CrontabExecutor.php                           # 定时任务执行中心
│  TaskInterface.php                             # 定时任务接口（自定义的定时任务都应当实现该接口）
│
└─Repository                                     # 定时任务核心类库
|        ExtCrontab.php                          # 扩展系统自带的Crontab
|        SysCrontab.php                          # Crontab预处理（将从数据库查询出来的任务转化为Crontab格式）
|        SysCrontabDispatcherProcess.php         # 定时任务监听进程
|        SysExecutor.php                         # 定时任务调度中心
│
└─Task
        DemoTask.php                             # 定时任务demo
```

## 编写定时任务

```
php bin/hyperf.php arkGen:task DemoTask
```

```php
<?php

namespace App\Crontab\Task;

use App\Crontab\TaskInterface;

class DemoTask implements TaskInterface
{
    public function execute($params)
    {
       // 定时任务业务逻辑;
    }
}
```

> 注：
>
> 1、所有的定时任务都应当实现App\Crontab\TaskInterface接口

