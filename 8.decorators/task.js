//Задача № 1
function cachingDecoratorNew(func) {
  let cashe = [];
  return function(...args) {
    const hash = md5(args);
    let objectInCashe = cashe.find(item => item.hash === hash);
    if (objectInCashe) {
        console.log(`Из кеша: ` + objectInCashe.result);
        return `Из кеша: ` + objectInCashe.result;
    }

    let result = func(...args);
    cashe.push({hash, result});
    if (cashe.length > 5) {
        cashe.shift();
    }
    console.log(`Вычисляем: ` + result);
    return `Вычисляем: ` + result;
  }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  function wrapper(...args) {
    clearTimeout(timeoutId);
    if (!timeoutId) {
      func(...args);
      wrapper.count++;
    }  
    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay);
    wrapper.allCount++;
  }

  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
