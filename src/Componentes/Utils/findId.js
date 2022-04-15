const findId = (time, task, id) => {
    return new Promise((resolve, reject) => {
        const findProd = task.find(
            (product) => product.id === Number(id))
        setTimeout(() => {
            id ? resolve(findProd) : resolve(task);
        }, time);
    }
    )
}

export default findId;