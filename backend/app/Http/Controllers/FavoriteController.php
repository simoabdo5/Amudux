<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function index()
    {
        return Favorite::with('favoritable')->get();
    }

    public function store(Request $request)
    {
        $favorite = Favorite::create([
            'user_id' => $request->user_id,
            'favoritable_id' => $request->favoritable_id,
            'favoritable_type' => $request->favoritable_type,
        ]);

        return response()->json($favorite);
    }

    public function destroy($id)
    {
        Favorite::findOrFail($id)->delete();

        return response()->json([
            'message' => 'Deleted'
        ]);
    }
}