export default () => {
  return {
    index: async (ctx, next) => {
      ctx.response.body = "hello"
    }
  }
}
