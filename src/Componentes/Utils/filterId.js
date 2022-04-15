const filterId = (time, task, id) => {
    return new Promise((resolve, reject) => {
        const filtroProd = task.filter(
            (product) => product.id === id)
        setTimeout(() => {
            id ? resolve(filtroProd) : resolve(task);
        }, time);
    }
    )
}

export default filterId;