### javascript 
> DOM(Document Object Modal) + BOM(Browser Object Modal) + ECMAscript(核心语法标准)
### es6

2015年六月出版的第6版语法标准 简称es6

### 声明变量

> const

1. 声明常量（不能再次修改值，引用类型不能修改地址）
2. {}会产生块级作用域 
    es5之前只有函数作用域 
3. 不会变量提升
4. const 不能在声明时不赋值
5. const 声明不能重名

> let
1. 声明变量  let const var 不能同时出现相同变量
2. 暂时性死区

**var声明的变量会变成顶层对象的属性**

**let和const声明的变量不会挂载到顶层对象中**



{
    key:变量名,
    key1:{
        a:变量名
    }
} = {
    key:变量值
    key1:{
        a:变量值
    }
}