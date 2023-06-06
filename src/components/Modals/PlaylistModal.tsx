import { forwardRef, useEffect } from 'react';
import { editPlaylistInfo } from '../../services/spotify.service';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import { PlaylistInfo } from 'shared/types/spotify';

interface Props {
    initialData: PlaylistInfo;
    onClose: () => void;
}

type FormValues = {
    name: string;
    description: string;
};

const StyledModal = styled.dialog`
    border-radius: 8px;
    background-color: #262626;
    color: white;
    border: transparent;

    & div {
        display: flex;
        justify-content: space-between;
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    padding: 10px;
`;

const StyledInput = styled.input`
    all: unset;
    background-color: #3e3e3e;
    border-radius: 4px;
    border: #7b7b7b 1px solid;
    padding: 5px;
    font-size: 16px;
`;

const StyledButton = styled.button`
    background-color: white;
    width: fit-content;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 32px;
    color: black;
    font-weight: bold;
`;

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`;

const PlaylistModal = forwardRef<HTMLDialogElement, Props>(
    ({ initialData, onClose }, ref) => {
        const {
            register,
            handleSubmit,
            formState: { errors },
            setValue,
        } = useForm<FormValues>();

        useEffect(() => {
            if (initialData.name !== '') {
                setValue('name', initialData.name);
                setValue('description', initialData.description);
            }
        }, [initialData]);

        const onSubmit = handleSubmit((data) => {
            const { name, description } = data;
            editPlaylistInfo({
                ...initialData,
                name,
                description,
            }).then(() => {
                onClose();
            });
        });

        return (
            <StyledModal ref={ref}>
                <div>
                    <h3 role="button">Edit Details</h3>
                    <button onClick={onClose}>
                        <MdClose />
                    </button>
                </div>
                <StyledForm onSubmit={onSubmit}>
                    <StyledLabel htmlFor="playlist_name">
                        <span>Name</span>
                        <StyledInput
                            id="playlist_name"
                            type="text"
                            {...register('name', {
                                required: true,
                            })}
                        />
                    </StyledLabel>
                    <StyledLabel htmlFor="playlist_desc">
                        <span>Description</span>
                        <StyledInput
                            id="playlist_desc"
                            {...register('description')}
                        />
                    </StyledLabel>

                    <StyledButton type="submit">Save</StyledButton>
                </StyledForm>
            </StyledModal>
        );
    },
);

export default PlaylistModal;
