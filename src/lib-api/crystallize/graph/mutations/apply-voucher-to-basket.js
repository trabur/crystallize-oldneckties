export default `
  mutation applyVoucherToBasket(
    voucherCode: String!
    basketModel: BasketModelInput!
  ) {
    total {
      gross
      net
      tax {
        name
        percent
      }
      currency
    }
    cart {
      id
      name
      sku
      path
      quantity
      attributes {
        attribute
        value
      }
      price {
        gross
        net
        tax {
          name
          percent
        }
        currency
      }
      images {
        url
        variants {
          url
          width
          height
        }
      }
    }
    voucher {
      code
      discountAmount
      discountPercent
    }
  }
`;
