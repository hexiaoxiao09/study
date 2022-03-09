/* 
 * 递归函数
 * 
 * 
*/
const url = 'https://scrm.xy.ucloudant.com/api/customer_operating/mass/get_department_user_list'

const xhr = new XMLHttpRequest()

xhr.open('GET', url);

xhr.send();

const getResult = () => {
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        resolve(xhr.responseText);
      }
    };
  })
}

const getData = async () => {
  getResult().then((res) => {
    if (res) {
      const result = JSON.parse(res)
      console.log(result.data, dealWithData(result.data))
    }
  })
}


getData()



const dealWithData = (initData) => {
  const result = []
  initData.forEach((item) => {
    if (item.child && item.child.length) {
      if (item.user && item.user.length) {
        const folderArr = dealWithData(item.child)
        const userArr = []
        item.user.forEach((userItem) => {
          userArr.push({
            key: `${item.parentid}-${item.id}`,
            title: userItem.name,
            userid: userItem.userid
          })
        })
        result.push({
          key: `${item.parentid}-${item.id}`,
          title: item.name,
          children: [...folderArr, ...userArr],
        })
      } else {
        result.push({
          key: `${item.parentid}-${item.id}`,
          title: item.name,
          children: dealWithData(item.child),
        })
      }
    } else {
      result.push({
        key: `${item.parentid}-${item.id}`,
        title: item.name,
      })
    }
  })
  return result
}


console.log(url)
