import { GameStatus } from "@/modules/pokemon/interfaces"

describe('GameStatus enum',()=>{
    test('shoul have a value of playinh',()=>{
        expect(GameStatus.Playing).toBe('playing')

    })
    //se hace los otros dos tests para los otros estados de la madre esta
})

