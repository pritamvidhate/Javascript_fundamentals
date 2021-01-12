const uno = () => {
    return "I am one";
}

const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am two")
        },3000);
    });
};

const tres = () => {
    return "I am tres";
}

const cautro = () => {
    return "I am four";
}

const callMe = async () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);

    let valFour = cautro();
    console.log(valFour);
};

callMe();