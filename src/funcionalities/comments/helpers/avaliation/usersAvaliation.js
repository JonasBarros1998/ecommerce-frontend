export const avaliations = (datas) => {

    let _countOneStar = 0
    let _countTwoStar = 0
    let _countThreeStar = 0
    let _countFourStar = 0
    let _countFiveStar = 0

    datas.map(itemAvaliation => {
        switch (itemAvaliation.avaliation) {
            case 1:
                _countOneStar += 1
                break;
            case 2:
                _countTwoStar += 1
                break;
            case 3:
                _countThreeStar += 1
                break;
            case 4:
                _countFourStar += 1
                break;
            case 5:
                _countFiveStar += 1
                break;
            default:
                break;
        }
        return itemAvaliation
    })

    const totalAvaliation = {
        oneStar: _countOneStar,
        twoStar: _countTwoStar, 
        threeStar: _countThreeStar,
        fourStar: _countFourStar, 
        fiveStar: _countFiveStar
    }
    return totalAvaliation
}
