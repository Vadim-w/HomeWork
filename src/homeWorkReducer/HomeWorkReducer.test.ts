import {hwReducer, sortDownAC, sortMajorityAC, sortUpAC, StateType} from "./HomeWorkReducer";
import {v1} from "uuid";


test("Correct sorting of people in ascending order", () => {

    const startState: Array<StateType> = [
        {id: v1(), name: "Vasya", age: 33},
        {id: v1(), name: "Kolya", age: 22},
        {id: v1(), name: "Anton", age: 45}
    ]

    const endState = hwReducer(startState, sortUpAC("up"))

    expect(endState.length).toBe(3);
    expect(endState[0].age).toBe(22);
    expect(endState[2].age).toBe(45)
});

test("Correct sorting of people in descending order", () => {


    const startState: Array<StateType> = [
        {id: v1(), name: "Vasya", age: 33},
        {id: v1(), name: "Kolya", age: 22},
        {id: v1(), name: "Anton", age: 45}
    ]

    const endState = hwReducer(startState, sortDownAC("down"))

    expect(endState.length).toBe(3);
    expect(endState[0].age).toBe(45);
    expect(endState[2].age).toBe(22)
});

test("correct sorting of people over 18 years old", () => {

    const startState: Array<StateType> = [
        {id: v1(), name: "Vasya", age: 18},
        {id: v1(), name: "Kolya", age: 12},
        {id: v1(), name: "Anton", age: 45},
        {id: v1(), name: "Olga", age: 17},
        {id: v1(), name: "Victor", age: 46},
        {id: v1(), name: "John", age: 14}
    ]

    const endState = hwReducer(startState, sortMajorityAC(18))

    expect(endState.length).toBe(3)
    expect(endState[0].age).toBe(18)
    expect(endState[1].age).toBe(45)
    expect(endState[2].age).toBe(46)
});