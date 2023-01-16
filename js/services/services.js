//async and await works in pair
//async - понимает что код функции асинхронный
const postData = async (url, data) => {
    const result = await fetch(url, { //await - ставим перед тем, что будем ждать
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    //ждет перед возвращением
    return await result.json();
};

async function getResource(url) {
    let result = await fetch(url);

    if (!result.ok) {
        throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }

    return await result.json();
}

export {postData};
export {getResource};