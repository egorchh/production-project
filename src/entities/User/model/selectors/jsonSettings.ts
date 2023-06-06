import { buildSelector } from '@/shared/store';
import { JsonSettings } from '../types/jsonSettings';

const defaultJsonSettings: JsonSettings = {};

export const [
    useJsonSettings,
    getJsonSettings,
] = buildSelector((state) => state.user?.authData?.jsonSettings ?? defaultJsonSettings);
