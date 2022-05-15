import {makeStyles} from "@material-ui/core/styles"

export default  makeStyles(()=>({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      BrandContainer:{
        flex:1,
        display:'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',  
      },

      image: {
        marginLeft: '15px',
      },

}));
