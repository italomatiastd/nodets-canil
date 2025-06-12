type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish' // Define os tipos possíveis para o menu

export const createMenuObject = (activeMenu: MenuOptions) => {  // Função para criar o objeto do menu dinâmico
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    // Define o estado de cada item do menu com base no parâmetro activeMenu
    if (activeMenu !== ''){
        returnObject[activeMenu] = true;
    }
    // Se activeMenu for vazio, nenhum item do menu ficará ativo
    return returnObject;
}