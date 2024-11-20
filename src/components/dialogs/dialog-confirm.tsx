import type { ReactNode } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '../ui/button';

type DialogConfirmProps = {
  title: string;
  description: string;
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  triggerChildren: ReactNode;
  confirmSuccess: () => void;
};
export default function DialogConfirm({ title, description, isOpen, triggerChildren, confirmSuccess, setOpen }: DialogConfirmProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerChildren}
      </DialogTrigger>
      <DialogContent className="pb-0">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold leading-[27px] text-[#333333]">{title}</DialogTitle>
          <DialogDescription className="text-center text-[13px] font-light leading-4 text-[#e12626]">{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className=" before:absolute before:left-0 before:h-[0.5px] before:w-full before:bg-backGround-gray before:content-['']">
          <Button
            onClick={() => {
              setOpen(false);
            }}
            className="w-1/2 border-r-[0.5px] border-border-gray py-[15px] text-center text-base font-light"
          >
            キャンセル
          </Button>
          <Button
            onClick={() => {
              setOpen(false);
              confirmSuccess();
            }}
            className="w-1/2 py-[15px] text-center text-base font-semibold text-[#e12626]"
          >
            削除する
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
