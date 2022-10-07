const _fetchApi = (
    url,
    success = (f) => f,
    error = (f) => f,
    empty = (f) => f
  ) => {
    //   const { facilityId } = store.getState().auth.user;
    //   let actualURL = `${url}/${facilityId}`
    fetch(url)
      .then((raw) => raw.json())
      .then((response) => {
        // console.log(url);
        if (response) {
          success(response);
        } else {
          // console.log('Empty response');
          empty();
        }
      })
      .catch((err) => {
        // console.log(url);
        console.log(err)
        error(err);
      });
  };

export default _fetchApi