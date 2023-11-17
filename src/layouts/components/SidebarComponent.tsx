import React from 'react';
import '../styles/Sidebar.scss';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string;
}

type MenuItem = Required<MenuProps>['items'][number];

const { Sider } = Layout;

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Navigation One',
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
  },
  {
    key: 'sub3',
    label: 'Navigation Three',
  },
  {
    key: 'sub4',
    label: 'Navigation Four',
  },
];

const SidebarComponent = ({ className }: SidebarProps) => {
  const { t } = useTranslation();

  const menuTop: MenuItem[] = [
    {
      key: 1,
      label: t('sider.home'),
    },
    {
      key: 2,
      label: t('sider.search'),
    },
    {
      key: 3,
      label: t('sider.explore'),
    },
    {
      key: 4,
      label: t('sider.reels'),
    },
    {
      key: 5,
      label: t('sider.messages'),
    },
    {
      key: 6,
      label: t('sider.messages'),
    },
    {
      key: 7,
      label: t('sider.notifications'),
    },
    {
      key: 8,
      label: t('sider.create'),
    },
    {
      key: 9,
      label: t('sider.profile'),
    },
  ];

  const menuBottom: MenuItem[] = [
    {
      key: 10,
      label: t('sider.threads'),
    },
    {
      key: 11,
      label: t('sider.more'),
    },
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
  };

  return (
    <Sider className={`${className} min-h-screen !bg-white text-white`}>
      <div className="flex min-h-screen flex-col justify-between">
        <Menu onClick={onClick} mode="vertical" items={menuTop} />
        <Menu onClick={onClick} mode="vertical" items={menuBottom} />
      </div>
    </Sider>
  );
};

export default SidebarComponent;
