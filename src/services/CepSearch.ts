

export const CepSearch = async (cep: string) => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        if (response.status === 200) {
            const data = await response.json();
            // console.log('Parsed response: ', data);
            
            return data;
        } else {
            throw new Error(`Error fetching data: ${response.status}`);
        }
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
};