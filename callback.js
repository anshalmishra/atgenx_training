// callbacks, promises and async/await
function sendBackThePostsToPrint(callback) {
  // Fetch the posts
  let request = new XMLHttpRequest();
  request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  request.send();
  request.onload = () => {
    // console.log(request.response);
    callback(request.response);
  };
}
function logPosts(posts) {
  console.log(`posts are ${posts}`);
}
sendBackThePostsToPrint(logPosts);

// Promises

const getEmployeeIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Rejected for learning purpose');
  }, 2000);
  setTimeout(() => {
    console.log('Trying to resolve after 5 seconds');
    resolve([2, 3, 4, 6, 7]);
  }, 5000);
});

getEmployeeIds
  .then((idArray) => {
    console.log('Promise resolved. Ids : ', idArray);
  })
  .catch((error) => {
    console.log('Promise rejected. Error : ', error);
  });

// Promises

const getEmployeeIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Rejected for learning purpose');
  }, 2000);
  setTimeout(() => {
    console.log('Trying to resolve after 5 seconds');
    resolve([2, 3, 4, 6, 7]);
  }, 5000);
});

getEmployeeIds
  .then((idArray) => {
    console.log('Promise resolved. Ids : ', idArray);
  })
  .catch((error) => {
    console.log('Promise rejected. Error : ', error);
  });

// Calling API using fetch that returns a promise
function logPosts(posts) {
  console.log(posts);
  console.log(`posts are ${posts}`);
}
fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
  logPosts(response)
);

// Promises

const getEmployeeIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Rejected for learning purpose');
  }, 2000);
  setTimeout(() => {
    console.log('Trying to resolve after 5 seconds');
    resolve([2, 3, 4, 6, 7]);
  }, 5000);
});

getEmployeeIds
  .then((idArray) => {
    console.log('Promise resolved. Ids : ', idArray);
  })
  .catch((error) => {
    console.log('Promise rejected. Error : ', error);
  });

// Calling API using fetch that returns a promise
function logPosts(posts) {
  console.log(`posts are ${posts}`);
}
fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
  logPosts(response)
);

//Aynsc/Await
let getEmployeeIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([2, 3, 4, 6, 7]);
  }, 1000);
});
let getEmployeeObject = (employeeId) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (id) => {
        const employee = {
          id: id,
          name: 'Bruno',
          role: 'UI Engineer',
        };
        resolve(employee);
      },
      1500,
      employeeId
    );
  });
};
async function getEmployee() {
  const ids = await getEmployeeIds;
  console.log(ids);
  const employee = await getEmployeeObject(ids[1]);
  console.log(employee);
  return employee;
}
getEmployee().then((employee) => {
  console.log(employee);
});
