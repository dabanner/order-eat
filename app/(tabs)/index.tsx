import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { SideMenu } from '../../components/SideMenu/side-menu';

interface Category {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface Restaurant {
  id: string;
  name: string;
  type: string;
  rating: number;
  delivery: string;
  time: string;
  image: string;
}

const categories: Category[] = [
  { id: '1', name: 'Pizza', price: 70, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg' },
  { id: '2', name: 'Burger', price: 50, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg' },
  { id: '3', name: 'Sushi', price: 80, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg' },
  { id: '4', name: 'Pasta', price: 60, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg' },
  { id: '5', name: 'Salad', price: 40, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg' },
  { id: '6', name: 'Steak', price: 90, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg' },
  { id: '7', name: 'Seafood', price: 85, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg' },
  { id: '8', name: 'Tacos', price: 45, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg' },
  { id: '9', name: 'Ramen', price: 55, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg' },
  { id: '10', name: 'Dessert', price: 30, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg' },
];

const restaurants: Restaurant[] = [
  { id: '1', name: 'Rose Garden Restaurant', type: 'Burger - Chicken - Ribs - Wings', rating: 4.7, delivery: 'Free', time: '20 min', image: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '2', name: 'Sushi Paradise', type: 'Japanese - Sushi - Asian', rating: 4.5, delivery: '$2.99', time: '25 min', image: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '3', name: 'Pasta Palace', type: 'Italian - Pasta - Pizza', rating: 4.3, delivery: 'Free', time: '30 min', image: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '4', name: 'Taco Town', type: 'Mexican - Tacos - Burritos', rating: 4.6, delivery: '$1.99', time: '15 min', image: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '5', name: 'Green Leaf Salads', type: 'Salads - Healthy - Vegan', rating: 4.4, delivery: 'Free', time: '20 min', image: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '6', name: 'Steakhouse 66', type: 'Steak - Grill - American', rating: 4.8, delivery: '$3.99', time: '35 min', image: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '7', name: 'Noodle House', type: 'Asian - Noodles - Soup', rating: 4.2, delivery: '$1.50', time: '25 min', image: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '8', name: 'Pizza Planet', type: 'Pizza - Italian - Fast Food', rating: 4.0, delivery: 'Free', time: '30 min', image: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '9', name: 'Seafood Shack', type: 'Seafood - Fish - Grill', rating: 4.6, delivery: '$2.50', time: '40 min', image: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '10', name: 'Sweet Tooth Desserts', type: 'Desserts - Ice Cream - Bakery', rating: 4.9, delivery: '$1.99', time: '15 min', image: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D' },
];

export default function HomeScreen() {
  const pageSize = 4;
  const [categoriesCurrentPage, setCategoriesCurrentPage] = useState(1);
  const [categoriesRenderedData, setCategoriesRenderedData] = useState<Category[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);

  const [restaurantsCurrentPage, setRestaurantsCurrentPage] = useState(1);
  const [restaurantsRenderedData, setRestaurantsRenderedData] = useState<Restaurant[]>([]);
  const [isLoadingRestaurants, setIsLoadingRestaurants] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pagination = <T extends Category | Restaurant>(database: T[], currentPage: number, pageSize: number): T[] => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingCategories(true);
    const getInitialCategoriesData = pagination(categories, 1, pageSize);
    setCategoriesRenderedData(getInitialCategoriesData);
    setIsLoadingCategories(false);

    setIsLoadingRestaurants(true);
    const getInitialRestaurantsData = pagination(restaurants, 1, pageSize);
    setRestaurantsRenderedData(getInitialRestaurantsData);
    setIsLoadingRestaurants(false);
  }, []);

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <View style={styles.categoryCard}>
      <View style={styles.categoryImageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.categoryImage}
        />
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
      <Text style={styles.categoryPrice}>Starting <Text style={styles.price}>${item.price}</Text></Text>
    </View>
  );

  const renderRestaurantItem = ({ item }: { item: Restaurant }) => (
    <View style={styles.restaurantCard}>
      <Image
        source={{ uri: item.image }}
        style={styles.restaurantImage}
      />
      <Text style={styles.restaurantName}>{item.name}</Text>
      <Text style={styles.restaurantType}>{item.type}</Text>
      <View style={styles.restaurantInfo}>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={16} color="#FF8C00" />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
        <View style={styles.deliveryContainer}>
          <MaterialCommunityIcons name="truck-delivery-outline" size={16} color="#FF8C00" />
          <Text style={styles.deliveryText}>{item.delivery}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Ionicons name="time-outline" size={16} color="#FF8C00" />
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.menuButton}
            onPress={() => setIsMenuOpen(true)}
          >
            <MaterialIcons name="menu" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.deliverTo}>
            <Text style={styles.deliverToLabel}>DELIVER TO</Text>
            <View style={styles.locationRow}>
              <Text style={styles.location}>Halal Lab office</Text>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="#000" />
            </View>
          </View>
          <TouchableOpacity style={styles.cartButton}>
            <MaterialCommunityIcons name="shopping-outline" size={24} color="#000" />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Greeting */}
        <Text style={styles.greeting}>Hey Halal, <Text style={styles.greetingTime}>Good Afternoon!</Text></Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search dishes, restaurants"
            placeholderTextColor="#666"
          />
        </View>

        <FlatList
          ListHeaderComponent={
            <>
              {/* Categories Section */}
              <View style={styles.categoriesHeader}>
                <Text style={styles.sectionTitle}>All Categories</Text>
                <TouchableOpacity style={styles.seeAllContainer}>
                  <Text style={styles.seeAll}>See All</Text>
                  <MaterialIcons name="chevron-right" size={24} color="#666" />
                </TouchableOpacity>
              </View>

              <FlatList
                data={categoriesRenderedData}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (isLoadingCategories) {
                    return;
                  }
                  setIsLoadingCategories(true);
                  const contentToAppend = pagination(
                    categories,
                    categoriesCurrentPage + 1,
                    pageSize,
                  );
                  if (contentToAppend.length > 0) {
                    setCategoriesCurrentPage(categoriesCurrentPage + 1);
                    setCategoriesRenderedData(prev => [...prev, ...contentToAppend]);
                  }
                  setIsLoadingCategories(false);
                }}
                style={styles.categoriesScroll}
              />

              {/* Restaurants Section */}
              <View style={styles.categoriesHeader}>
                <Text style={styles.sectionTitle}>Open Restaurants</Text>
                <TouchableOpacity style={styles.seeAllContainer}>
                  <Text style={styles.seeAll}>See All</Text>
                  <MaterialIcons name="chevron-right" size={24} color="#666" />
                </TouchableOpacity>
              </View>
            </>
          }
          data={restaurantsRenderedData}
          renderItem={renderRestaurantItem}
          keyExtractor={(item) => item.id}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingRestaurants) {
              return;
            }
            setIsLoadingRestaurants(true);
            const contentToAppend = pagination(
              restaurants,
              restaurantsCurrentPage + 1,
              pageSize,
            );
            if (contentToAppend.length > 0) {
              setRestaurantsCurrentPage(restaurantsCurrentPage + 1);
              setRestaurantsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingRestaurants(false);
          }}
        />
      </SafeAreaView>
      <SideMenu 
        visible={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  menuButton: {
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
  },
  deliverTo: {
    flex: 1,
    marginHorizontal: 16,
  },
  deliverToLabel: {
    fontSize: 12,
    color: '#FF8C00',
    fontWeight: '600',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 16,
    fontWeight: '500',
  },
  cartButton: {
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FF8C00',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
  },
  greetingTime: {
    fontWeight: '400',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 12,
    marginBottom: 24,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAll: {
    color: '#666',
    marginRight: 4,
  },
  categoriesScroll: {
    marginBottom: 24,
  },
  categoryCard: {
    marginRight: 16,
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
    }),
  },
  categoryImageContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  categoryPrice: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    color: '#FF8C00',
    fontWeight: '600',
  },
  restaurantCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
    }),
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  restaurantType: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  restaurantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  rating: {
    marginLeft: 4,
    fontWeight: '500',
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  deliveryText: {
    marginLeft: 4,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    marginLeft: 4,
  },
});
