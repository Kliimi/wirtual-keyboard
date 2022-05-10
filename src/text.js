export function addHeader () {
    let headerText = "RSS Виртуальная клавиатура";
    let header = document.createElement('h1');
    header.className = 'title';
    header.innerHTML = headerText;

    return header;
}

export function addDescription () {
    let description1 = "Клавиатура создана в операционной системе Windows";
    let description2 = "Для переключения языка комбинация: левыe ctrl + alt";

    let descriptionWrapper = document.createElement("div");

    descriptionWrapper.className = 'description-wrapper';

    let descr1 = document.createElement('p');
    descr1.className = 'description';
    descr1.innerHTML = description1;

    let descr2 = document.createElement('p');
    descr2.className = 'description';
    descr2.innerHTML = description2;

    descriptionWrapper.append(descr1);
    descriptionWrapper.append(descr2);

    return descriptionWrapper


}