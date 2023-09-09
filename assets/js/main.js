const myIterable = {
   data: [1, 2, 3, 4, 5],
   [Symbol.iterator]() {
      let index = 0;
      return {
         next: () => {
            if (index < this.data.length) {
               return { value: this.data[index++], done: false };
            } else {
               return { done: true };
            }
         },
      };
   },
};

// Use the iterable with a for...of loop
for (const item of myIterable) {
   console.log(item);
   console.log("done");
}
