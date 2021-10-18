
function filterFieldData(courseData,field){
    const _data = courseData.filter((item, index)=>{
        if(filter ==='all'){
            return true
        }

        return item.field === field
    })


    return doSlice ? _data.slice(0,4):_data
}

function directToPage(navigation,pageName,params){
    navigation.navigate(pageName,params)
}

export { filterFieldData,directToPage }