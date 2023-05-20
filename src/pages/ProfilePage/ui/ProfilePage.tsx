import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <Page className={classNames(styles.profilePage, {}, [className])}>
            <EditableProfileCard id={id} />
            <ProfileRating className={styles.profileRating} profileId={id} />
        </Page>
    );
};

export default ProfilePage;
