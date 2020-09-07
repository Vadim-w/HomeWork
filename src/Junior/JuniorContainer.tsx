import {setLoading, setMaxPrice, setMinPrice, setRangeValue} from "../redux/juniorReducer/juniorReducer";
import React from "react";
import {Junior} from "./Junior";
import {RootState} from "../redux/store";
import {connect} from "react-redux";

type JuniorContainerPropsType = {
    loading: boolean
    setLoading: (loading: boolean) => void
    rangeValue: string
    setRangeValue: (value: string) => void
    setMinPrice: (value: string) => void
    setMaxPrice: (value: string) => void
    maxPrice: string
    minPrice: string
}

const JuniorContainer = (props: JuniorContainerPropsType) => {
    return (
        <Junior {...props}/>
    )
}
let mapStateToProps = (state: RootState) => ({
    loading: state.juniorReducer.loading,
    rangeValue: state.juniorReducer.rangeValue,
    minPrice: state.juniorReducer.minPrice,
    maxPrice: state.juniorReducer.maxPrice

})
export default connect(mapStateToProps, {setLoading, setRangeValue, setMaxPrice, setMinPrice})(JuniorContainer);

