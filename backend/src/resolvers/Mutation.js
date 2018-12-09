const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: check if they are logged on

    const item = await ctx.db.mutation.createItem({
      data: {
        // spread all args in to data field from createItem()
        ...args
      }
    }, info)

    return item
  }
  // createDog(parent, args, ctx, info) {
  //   global.dogs = global.dogs || []
  //   //create dog
  //   const newDog = { name: args.name }
  //   global.dogs.push(newDog)
  //   return newDog
  // }
}

module.exports = Mutations;
