import { memo, useState } from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import { Icon } from '../Icon/Icon';
import StarSVG from '../../../assets/icons/star-fill.svg';
import { HStack } from '../Stack';
import styles from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

/**
 * Компонент устарел, используйте компоненты из директории redesigned
 * @deprecated
 */
export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        size = 24,
        selectedStars = 0,
        onSelect,
    } = props;
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars ?? 0);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starValue: number) => () => {
        if (!isSelected) {
            onSelect?.(starValue);
            setCurrentStarsCount(starValue);
            setIsSelected(true);
        }
    };

    return (
        <HStack className={classNames('', {}, [className])} gap="6">
            {stars.map((starValue) => (
                <Icon
                    className={classNames(styles.starIcon, {
                        [styles.hovered]: currentStarsCount >= starValue,
                        [styles.selected]: isSelected,
                    })}
                    Svg={StarSVG}
                    key={starValue}
                    invertedColor
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starValue)}
                    onClick={onClick(starValue)}
                    data-testid={`StarRating.${starValue}`}
                    data-selected={currentStarsCount >= starValue}
                />
            ))}
        </HStack>
    );
});
