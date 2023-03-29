import { Stack } from "expo-router";

export default function FeedLayout() {
	return (
		<>
			<Stack.Screen options={{ headerShown: false }} />
			<Stack initialRouteName="feed">
				<Stack.Screen name="feed" options={{ title: 'Feed' }} />
				<Stack.Screen name="profile/friends" options={{ title: 'Friends via Feed' }} />
			</Stack>
		</>
	)
}