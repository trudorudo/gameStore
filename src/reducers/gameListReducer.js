import { GET_GAME_LIST } from '../actions/gameListActions';

const initialState = {
    gameStoreData: {}
}

const gameListReducer = (state = initialState, action={}) => {
    switch(action.type){
        case `${GET_GAME_LIST}`:
            return {
                ...state,
                // gameStoreData: action.payload
                gameStoreData: {
                    "1": {
                        "name": "Saints Row 2",
                        "price": 49,
                        "cover": "http://s.gama-gama.ru/fullsize/e56c325f30f3d01b0f0f1ea8d5b59d70.jpg"
                    },
                    "2": {
                        "name": "Super Meat Boy",
                        "price": 95,
                        "cover": "http://s.gama-gama.ru/fullsize/55ec56700fb25cea5bac845490b8551a.jpg"
                    },
                    "3": {
                        "name": "From Dust",
                        "price": 119,
                        "cover": "http://s.gama-gama.ru/fullsize/f5a4b5577e4fe62039d4d8712d007644.jpg"
                    },
                    "4": {
                        "name": "Аркания: Падение Сетаррифа",
                        "price": 221,
                        "cover": "http://s.gama-gama.ru/fullsize/bf333f90b8b254ad9223680f375e6b15.jpg"
                    },
                    "5": {
                        "name": "Call of Duty: Modern Warfare 2",
                        "price": 399,
                        "cover": "http://s.gama-gama.ru/fullsize/a6ce7010af4a14b130bedc65b1154844.jpg"
                    },
                    "6": {
                        "name": "Dishonored",
                        "cover": "http://s.gama-gama.ru/fullsize/7332648b2d3df8ae4c921086298fde99.jpg"
                    },
                    "7": {
                        "name": "Darksiders II",
                        "price": 189,
                        "cover": "http://s.gama-gama.ru/fullsize/e68fef4671c15c5228fdeaaaddec7fc0.jpg"
                    },
                    "8": {
                        "name": "С грузом по Европе 3",
                        "price": 379,
                        "cover": "http://s.gama-gama.ru/fullsize/ad126625822279baace14ad36a8862f8.jpg"
                    },
                    "9": {
                        "name": "F1 2012",
                        "price": 424,
                        "cover": "http://s.gama-gama.ru/fullsize/7e41d9c1edd2f41d0e9c2ecaf3c05a97.jpg"
                    },
                    "10": {
                        "name": "WRC 3",
                        "price": 559,
                        "cover": "http://s.gama-gama.ru/fullsize/cb433d8e0fc384a01b3f444201fd1e38.jpg"
                    },
                    "11": {
                        "name": "Bridge Project",
                        "price": 79,
                        "cover": "http://s.gama-gama.ru/fullsize/e2174af13f2a5b822f4c95b8422608c4.jpg"
                    },
                    "12": {
                        "name": "F.E.A.R. 3",
                        "price": 149,
                        "cover": "http://s.gama-gama.ru/fullsize/2cdb775b40740ff73d8e02d43fb41a8e.jpg"
                    },
                    "13": {
                        "name": "Majesty Gold HD",
                        "price": 79,
                        "cover": "http://s.gama-gama.ru/fullsize/5a6bd1cac776d4f672ebed00002d79a3.jpg"
                    },
                    "14": {
                        "name": "Deep Black Reloaded",
                        "price": 99,
                        "cover": "http://s.gama-gama.ru/fullsize/ec769b08d9cefccda548647a26e0e492.jpg"
                    }
                }
            }
        default:
            return state;
    }
}


export default gameListReducer;