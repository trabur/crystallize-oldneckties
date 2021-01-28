import { useState } from 'react';
import { useT } from 'lib/i18n';
import { Input, InputGroup, Label } from '../styles';
import { VoucherDisplayer, ErrorMessage } from './styles';
import { Button } from 'ui';
import { useAuth } from 'components/auth';
import { useBasket } from 'components/basket';

export default function Voucher() {
  const auth = useAuth();
  const hasPermissionToUseVouchers = auth.isLoggedIn;
  const basket = useBasket();
  const t = useT();
  const [voucher, setVoucherState] = useState({
    value: basket.voucherCode
  });

  function handleClickOnApplyVoucher() {
    basket.actions.applyVoucher(voucher.value);
  }

  return (
    <InputGroup>
      <Label htmlFor="voucher">{t('checkout.vouchers.title')}</Label>
      <VoucherDisplayer>
        <Input
          name="voucher"
          value={voucher.value}
          onChange={(e) => setVoucherState({ value: e.target.value })}
          disabled={!hasPermissionToUseVouchers}
        />
        <Button
          onClick={handleClickOnApplyVoucher}
          disabled={!hasPermissionToUseVouchers}
        >
          Apply
        </Button>
      </VoucherDisplayer>
      {/* @todo not all vouchers need the user to be logged in */}
      {!hasPermissionToUseVouchers && (
        <ErrorMessage>
          {t('checkout.vouchers.noPermissionMessage')}
        </ErrorMessage>
      )}
    </InputGroup>
  );
}
