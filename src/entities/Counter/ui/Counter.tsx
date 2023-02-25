import { AppButton } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/model/selectors';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-value">{counterValue}</h1>
            <AppButton onClick={increment} data-testid="increment-button">
                {t('increment')}
            </AppButton>
            <AppButton onClick={decrement} data-testid="decrement-button">
                {t('decrement')}
            </AppButton>
        </div>
    );
};
