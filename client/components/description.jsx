import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function Description({
  prodInfo,
  prodInfo: { seller_msg },
}) {
  const specs = prodInfo.item_Spec;
  const arr = [];
  //  for in loop to filter out item specs with no data
  for (const key in specs) {
    if (specs[key] !== '') {
      switch (key) {
        case 'condition':
          arr.push('Condition:');
          break;
        case 'brand':
          arr.push('Brand:');
          break;
        case 'type':
          arr.push('Type:');
          break;
        case 'packaging':
          arr.push('Packaging:');
          break;
        case 'material':
          arr.push('Material:');
          break;
        case 'rec_age':
          arr.push('Recommended Age:');
          break;
        case 'char_family':
          arr.push('Character Family:');
          break;
        case 'manfactured':
          arr.push('Manufactured:');
          break;
        case 'era':
          arr.push('Era:');
          break;
        case 'year':
          arr.push('Year:');
          break;
        case 'size':
          arr.push('Size:');
          break;
        case 'upc':
          arr.push('UPC:');
          break;
        case 'Main_Category':
          arr.push('Main Category:');
          break;
        default:
          arr.push(`${key}:`);
      }
      arr.push(specs[key]);
    }
  }
  // format data so i have an array of arrays with 4 items in each for rendering
  const format = [];
  while (arr.length > 0) {
    const curr = [];
    curr.push(arr.slice(0, 4));
    format.push(curr);
    arr.splice(0, 4);
  }

  return (
    <StyledDesc data-test="desc-section">
      <ItemNumber>
        eBay item number:
        {prodInfo.item_number}
      </ItemNumber>
      <p>
        Seller assumes all responsibility for this listing.
      </p>
      <p>
        Last updated on {prodInfo.list_date} <Link href="#"> View all revisions</Link>
      </p>
      <ItemSpec>
        <Header>Item specifics</Header>
        <ItemTable>
          <tbody>
            {format.map(row => {
              return (
                <tr key={row[0]}>
                  <td>{row[0][0]}</td>
                  <td>{row[0][1]}</td>
                  <td>{row[0][2]}</td>
                  <td>{row[0][3]}</td>
                </tr>
              );
            })}
          </tbody>
        </ItemTable>
      </ItemSpec>
      <AboutProd>
        <AbHeader>{seller_msg.item_des}</AbHeader>
        <AboutPar>{seller_msg.prod_des}</AboutPar>
        <img src={seller_msg.img_url} alt="random stuff" height="250px" width="250px" />
      </AboutProd>
    </StyledDesc>
  );
}

Description.propTypes = {
  prodInfo: PropTypes.shape({
    item_number: PropTypes.number,
    list_date: PropTypes.string,
    item_Spec: PropTypes.object,
    seller_msg: PropTypes.shape({
      prod_des: PropTypes.string,
      item_des: PropTypes.string,
      img_url: PropTypes.string,
    }),
  }),
};

export default Description;

const StyledDesc = styled.div`
font-family: "Helvetica neue",Helvetica,Verdana,Sans-serif;
font-size: 12px;
`;
const ItemNumber = styled.p`
  text-align: right;
  padding-top: 0px;
`;
const ItemSpec = styled.div`
  border: 1px solid #cccccc;
  padding-left:
`;
const AboutProd = styled.div`
`;
const Header = styled.h1`
margin-top: 5px;
margin-bottom: 5px;
padding-left: 10px;
font-size: 16px;
`;
const AbHeader = styled(Header)`
  text-align: center;
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: #0654ba;
`;
const AboutPar = styled.p`
  width: 65%;
  float: left;
  padding-left:10px;
  margin-right: 15px;
  font-size: 14px;
`;
const ItemTable = styled.table`
  table-layout: auto;
  padding: 10px;
  width: 100%;
  tr, td {
    padding: 5px;
  }
`;
const Link = styled.a`
  text-decoration:none;
  font-color: #0654ba;
`;
