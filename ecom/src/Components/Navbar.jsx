import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../responisive';
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({height:"50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding:"10px 0"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({width:"50px"})}
`;

const Center = styled.div`
  text-align: center;
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize:"24px"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({flex:2,justifyContent:"center"})}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
  ${mobile({fontSize:"12px",marginLeft:'10px'})}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const cart = useSelector(state=>state.cart)

console.log(cart)
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>En</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{color:"grey",fontSize:'16px'}} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>NAIK.</Logo>
          </Center>
          <Right>
            <MenuItem> REGISTER</MenuItem>
            <MenuItem> SIGN IN </MenuItem>
            <Link to="/cart">
             <MenuItem>
              <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon/>
              </Badge>
            </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
