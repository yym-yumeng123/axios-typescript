# axios-typescript
typescript实现axios

### 目录
```
axios-typescript
├── example // 学习 ts 的例子
├── code-of-conduct.md
├── CONTRIBUTING.md
├── LICENSE
├── package.json
├── README.md
├── rollup.config.ts
├── src
│   └── library.ts
├── test
│   └── library.test.ts
├── tools
│   ├── gh-pages-publish.ts
│   ├── init.ts
│   └── semantic-release-prepare.ts
├── tsconfig.json
└── tslint.json
```

### 关联远程仓库
```
git remote add origin git@github.com:yym-yumeng123/axios-typescript.git

git remote -v // 查看关联结果
```

### 拉取远程代码
```
git pull origin master
```

### 提交代码
```
npm run commit
```

#### 1. 处理url
- `helpers/url.js`
- 测试代码 `demo/base`

#### 2. 处理body
```js
export const transformRequest = (data: any): any => {
  // 如果是普通对象
  if(isPlainObject(data)) {
    return JSON.stringify(data)
  }

  return data
}
```
