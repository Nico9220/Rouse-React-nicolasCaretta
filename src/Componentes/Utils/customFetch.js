const customFetch = (time, task, categoryId) => {
    return new Promise((resolve, reject) => {
        const filtroProd= task.filter(
        (product) => product.categoria === categoryId)
        setTimeout(() => {
            categoryId ? resolve (filtroProd) : resolve (task);
        }, time);
    }
    )
}

export default customFetch;