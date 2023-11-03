import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`



*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background:${({ theme }) => theme.colors.secondary[2]};
    font-family: 'Playfair Display', serif;
    font-size: 1.15em;
}


.category-filter{
    width:48%;
    

}

.category-filter :focus{
    outline-color: #21494B;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.products-page{
    min-height:80vh;
    padding: 1rem 1rem;
    position: relative;
}

.product{
    border-radius: 15px;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.secondary[3]};
    transition: transform 0.2s, box-shadow 0.2s;
    padding-bottom: 0;
    max-width:300px

}
.product:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.product img{
    height:70%;
    width:70%;
    margin: auto;
}

.image-holder{
    height: 150px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary[1]};
    
    display: flex;
    justify-content: center;
   
}

.banner{
    padding: 1rem 1rem;
    margin-left: 20px;
}


.banner h3{
    margin-top: .5rem;
    font-size: smaller;
    font-weight: 400;
    color:${({ theme }) => theme.colors.primary[1]};
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.banner p{
    font-weight: 700;
    font-size: medium;
    color:#21494B;

}

.pagination{
    width:50%;
    margin: auto;
    margin-bottom: 4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
   background-color:white ;
   
   

    button{
        padding:.5rem .5rem;
        width:100px;
        background-color: #0069D9;
        border-radius: 15px;
        color:white;
        border:2px solid #0069D9;
        cursor: pointer;
    }
    button:disabled {
  filter: blur(1px); /* Adjust the blur radius as needed */
}
}

.pages{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}

@media (max-width:${({ theme }) => theme.mobile}){
      
      .product{
        width:230px;
      }

      .pagination{
        width: 95%;


        button{
            font-size: 9px;
            width:70px;
        }

      }
  }

`;

export default GlobalStyles;
