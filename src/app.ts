
export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      // @ts-ignore
      console.error(err.message);
    },
  },
};
