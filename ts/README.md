# TypeScript
1. 静态类：声明一个变量要同时指定它的类型
2. 自带类型推断：当对变量的声明和赋值是同时进行的，TS可以自动推断出变量的类型


# 类型
- any 任意类型：可以被赋值为任意类型
- unknown 未知类型：只能被赋值为任意类型或者unknown类型
- never 永远类型：只能被赋值为never类型

- string 字符串   String（当你将一个变量声明为 String ）
- number 数字   Number
- boolean 布尔值   Boolean
- object 对象   Object（小写的object代表狭义对象类型,只包含数组、对象、函数等，Object代表广义对象类型，约等于any）
- array 数组   Array
- function 函数   Function
- null 空值   Null
- undefined 未定义  
- symbol 符号   Symbol
- bigint 大整数   BigInt
