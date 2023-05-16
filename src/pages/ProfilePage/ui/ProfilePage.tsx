import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import styles from './ProfilePage.module.scss';
import { ProfileRating } from '@/features/profileRating';

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
