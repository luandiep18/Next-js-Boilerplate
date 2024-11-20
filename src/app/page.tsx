'use client';
import DialogConfirm from '@/components/dialog-confirm/dialog-confirm';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

import { MessageCircleHeart } from 'lucide-react';

import React, { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const { toast } = useToast();
  const title
  = '削除すると、このプロフィールの動画と分析レポートも含めて全て削除されます。よろしいですか？';
  const description
  = '一度削除されたデータの復元はできませんので、どうか慎重にご検討ください。';

  const confirmSuccess = () => {
    // eslint-disable-next-line no-alert
    alert('sucsess');
  };
  return (
    <div>
      <h2>Button</h2>
      <Button type="submit" rounded="full" textcolor="white" size="default" background="primarypale">ログイン</Button>
      <h2>Input</h2>
      <Input className="py-[13px]" placeholder="電話番号を入力" icon={<div className=" !size-[24px]">123</div>} />

      <h2>Dialog</h2>
      <DialogConfirm confirmSuccess={confirmSuccess} triggerChildren={<MessageCircleHeart />} title={title} description={description} isOpen={isOpen} setOpen={setIsOpen} />
      <h2>checkbox, Toast</h2>
      <Checkbox
        className="size-[28px] rounded-[5px] border-2 border-[#e5b4ae]"
        checked={checked}
        id="1"
        onCheckedChange={(checked) => {
          setChecked(checked as boolean);
          toast({
            title: 'Todo added',
            description: 'Your todo has been created',
          });
        }}
      />

    </div>
  );
}
