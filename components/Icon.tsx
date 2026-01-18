import React from 'react';
import {
  TrendingUp,
  Cpu,
  BarChart3,
  Settings,
  MessageSquare,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Mail,
  User,
  MessageCircle,
  Package,
  Monitor,
  UserPlus,
  Users
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  switch (name) {
    case 'trending-up': return <TrendingUp className={className} size={size} />;
    case 'cpu': return <Cpu className={className} size={size} />;
    case 'bar-chart': return <BarChart3 className={className} size={size} />;
    case 'settings': return <Settings className={className} size={size} />;
    case 'message-square': return <MessageSquare className={className} size={size} />;
    case 'dollar-sign': return <DollarSign className={className} size={size} />;
    case 'chevron-left': return <ChevronLeft className={className} size={size} />;
    case 'chevron-right': return <ChevronRight className={className} size={size} />;
    case 'chevron-down': return <ChevronDown className={className} size={size} />;
    case 'arrow-right': return <ArrowRight className={className} size={size} />;
    case 'mail': return <Mail className={className} size={size} />;
    case 'user': return <User className={className} size={size} />;
    case 'message-circle': return <MessageCircle className={className} size={size} />;
    case 'box': return <Package className={className} size={size} />;
    case 'monitor': return <Monitor className={className} size={size} />;
    case 'user-plus': return <UserPlus className={className} size={size} />;
    case 'users': return <Users className={className} size={size} />;
    default: return null;
  }
};

export default Icon;