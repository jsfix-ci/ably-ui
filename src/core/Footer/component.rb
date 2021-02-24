module AblyUi
  module Core
    class Footer < ViewComponent::Base
      include AblyUi::Core::SharedAssets

      def rocket_list_path
        asset_path('ably_ui/core/images/rocket-list-2021.png')
      end

      def flexible_companies_path
        asset_path('ably_ui/core/images/flexible-companies.png')
      end
    end
  end
end
