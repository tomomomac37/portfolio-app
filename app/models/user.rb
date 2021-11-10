class User < ApplicationRecord
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    
    devise :database_authenticatable, :registerable,
           :recoverable, :rememberable, :validatable,
           :omniauthable, omniauth_providers: %i[facebook twitter google_oauth2]
    
    has_many :posts, dependent: :destroy
    has_many :post_images, dependent: :destroy
    
    # いいね機能
    has_many :likes, dependent: :destroy
    has_many :like_posts, through: :likes, source: :post
    
    def liked_by?(post_id)
      likes.where(post_id: post_id).exists?
    end
    
    attachment :profile_image
          
    has_many :follower, class_name: "Relationship", foreign_key: "follower_id", dependent: :destroy # フォロー取得
    has_many :followed, class_name: "Relationship", foreign_key: "followed_id", dependent: :destroy # フォロワー取得
    has_many :following_user, through: :follower, source: :followed # 自分がフォローしている人
    has_many :follower_user, through: :followed, source: :follower # 自分をフォローしている人
    
    def follow(user_id)
      follower.create(followed_id: user_id)
    end
  
    def unfollow(user_id)
      follower.find_by(followed_id: user_id).destroy
    end
  
    def following?(user)
      following_user.include?(user)
    end
    
    # omniauthのコールバック時に呼ばれるメソッド
    def self.from_omniauth(auth)
      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
        user.email = auth.info.email
        user.password = Devise.friendly_token[0,20]
      end
    end
    
  end
  