import React, { Component } from 'react';
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
} from 'semantic-ui-react';
import logo from 'image/logo3.png';

class Nav extends Component{
    render(){
        return(
            <div>
              <style>
                {
                  `
                    body > div > div >div.Menu{
                        color : orange;
                    }
                  `
                }
              </style>
                <Menu fixed='top' inverted>
      <Container className="Menu">
        <Menu.Item as='a' header>
          <Image size='tiny' src={logo} style={{ marginRight: '1.5em' }} />
          GoLink
        </Menu.Item>

        <Dropdown item simple text='사용자관리'>
          <Dropdown.Menu>
            <Dropdown.Item><span className='text'>사용자 조회</span></Dropdown.Item>
            <Dropdown.Item><span className='text'>사용자 등록</span></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item simple text='주문 관리'>
          <Dropdown.Menu>
            <Dropdown.Item>주문 등록</Dropdown.Item>
            <Dropdown.Item>주문 조회</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item simple text='배송 관리'>
          <Dropdown.Menu>
            <Dropdown.Item>배송 조회</Dropdown.Item>
            <Dropdown.Item>송장출려대기</Dropdown.Item>
            <Dropdown.Item>반품조회</Dropdown.Item>
            <Dropdown.Item>분리배송조회</Dropdown.Item>
            <Dropdown.Item>미발송조회</Dropdown.Item>
            <Dropdown.Item>합포장 분리</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item simple text='출고 관리'>
          <Dropdown.Menu>
            <Dropdown.Item>상품 매핑</Dropdown.Item>
            <Dropdown.Item>출고 의뢰</Dropdown.Item>
            <Dropdown.Item>출고 준비</Dropdown.Item>
            <Dropdown.Item>피킹조회</Dropdown.Item>
            <Dropdown.Item>출고관리</Dropdown.Item>
            <Dropdown.Item>상품명 분할</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item simple text='재고 관리'>
          <Dropdown.Menu>
            <Dropdown.Item>재고 조회</Dropdown.Item>
            <Dropdown.Item>재고 등록</Dropdown.Item>
            <Dropdown.Item>입출고조회</Dropdown.Item>
            <Dropdown.Item>입출고등록</Dropdown.Item>
            <Dropdown.Item>입출고수정</Dropdown.Item>
            <Dropdown.Item>예외재고조회</Dropdown.Item>
            <Dropdown.Item>예외재고등록</Dropdown.Item>
            <Dropdown.Item>예외재고상세조회</Dropdown.Item>
            <Dropdown.Item>입출고예정조회</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item simple text='공통코드 관리'>
          <Dropdown.Menu>
            <Dropdown.Item>공통코드 조회</Dropdown.Item>
            <Dropdown.Item>공통코드 그룹 등록</Dropdown.Item>
            <Dropdown.Item>공통코드 등록</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


      </Container>
    </Menu>
            </div>
        );
    }
}

export default Nav;