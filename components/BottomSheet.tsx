import React from 'react';
import { BottomSheet as BottomSheetMain } from 'react-spring-bottom-sheet';

const BottomSheet = ({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  children: React.ReactNode;
}) => {
  const onDismiss = () => {
    setOpen(false);
  };

  return (
    <BottomSheetMain
      open={open}
      onDismiss={onDismiss}
      defaultSnap={({ snapPoints, lastSnap }) =>
        lastSnap ?? Math.min(...snapPoints)
      }
      snapPoints={({ maxHeight }) => [maxHeight * 0.9]}
    >
      {children}
    </BottomSheetMain>
  );
};

export default BottomSheet;
