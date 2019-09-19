### graphQL+react+apolloClient 简单案例

- graphQL:  https://graphql.org/
- react 文档：https://zh-hans.reactjs.org/tutorial/tutorial.html
- react-apollo: https://www.apollographql.com/docs/react/

#### react项目构建
#### 添加ApolloClient实例
- 要在React中使用Apollo, 需要创建一个 ApolloClient和一个ApolloProvider
- ApolloClient 用户管理作为缓存的查询存储, 以及分发查询结果
- ApolloProvider 用于关联ApolloClient到React组件
- 创建一个客户端
  - ApolloClient 实例
- 创建一个Provider
  - 挂载UI组件
#### 添加GraphQL
  - graphql 容器是用于获取或修改数据推荐的方法. 是一个高阶组件, 用于把Apollo的数据提供给组件